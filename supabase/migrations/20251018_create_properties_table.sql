/*
  # Create Properties Table

  This migration creates the properties_full table for the real estate listings.

  1. New Tables
    - `properties_full`
      - `id` (uuid, primary key) - Unique identifier
      - `slug` (text, unique) - URL-friendly identifier
      - `title` (text) - Property title
      - `description` (text) - Detailed description
      - `location` (text) - Property location
      - `price` (numeric) - Property price in CHF
      - `rooms` (numeric) - Number of rooms
      - `area_m2` (numeric) - Area in square meters
      - `year_built` (integer) - Construction year
      - `property_type` (text) - Type (apartment, house, commercial, land)
      - `status` (text) - Status (available, sold, reserved)
      - `image_url` (text) - Main image URL
      - `features` (text) - Property features
      - `equipment` (text) - Equipment details
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `properties_full` table
    - Add policy for public read access (real estate listings are public)
    - Add policy for authenticated users to manage properties

  3. Indexes
    - Index on slug for fast lookups
    - Index on status for filtering
    - Index on created_at for sorting
*/

-- Create the properties_full table
CREATE TABLE IF NOT EXISTS properties_full (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text,
  location text NOT NULL,
  price numeric,
  rooms numeric,
  area_m2 numeric,
  year_built integer,
  property_type text DEFAULT 'apartment',
  status text DEFAULT 'available',
  image_url text,
  features text,
  equipment text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE properties_full ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (real estate listings are public)
CREATE POLICY "Anyone can view properties"
  ON properties_full
  FOR SELECT
  USING (true);

-- Create policy for authenticated users to insert properties
CREATE POLICY "Authenticated users can insert properties"
  ON properties_full
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy for authenticated users to update properties
CREATE POLICY "Authenticated users can update properties"
  ON properties_full
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy for authenticated users to delete properties
CREATE POLICY "Authenticated users can delete properties"
  ON properties_full
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_properties_slug ON properties_full(slug);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties_full(status);
CREATE INDEX IF NOT EXISTS idx_properties_created_at ON properties_full(created_at DESC);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_properties_updated_at ON properties_full;
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON properties_full
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
