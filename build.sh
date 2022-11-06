set -e

# TEST
# Clean up
rm -rf node_modules

# Install
npm ci

# Test
npm t