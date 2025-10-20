# Image Resizing Script

This script automatically creates smaller, optimized versions of all images in your portfolio.

## What it does

- Scans all images in `public/images/` directory
- Creates 3 optimized versions of each image:
  - **small**: 400x300px (for cards)
  - **medium**: 800x600px (for detail views) 
  - **thumbnail**: 200x150px (for previews)
- Saves them in `public/small_images/` maintaining the same folder structure
- Generates WebP format (primary) + PNG fallback
- Uses smart cropping to maintain aspect ratios

## How to use

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Run the script**:
   ```bash
   npm run resize-images
   ```

## Output

The script will create a `small_images` folder with the same structure as your `images` folder:

```
public/
├── images/
│   ├── about/
│   │   ├── black.png
│   │   └── bogota.png
│   └── projects/
│       ├── software.png
│       └── agile.png
└── small_images/
    ├── about/
    │   ├── black_small.webp
    │   ├── black_small.png
    │   ├── black_medium.webp
    │   ├── black_thumbnail.webp
    │   ├── bogota_small.webp
    │   └── ...
    └── projects/
        ├── software_small.webp
        └── ...
```

## Benefits

- **Faster loading**: Smaller file sizes
- **Better performance**: Multiple sizes for different use cases
- **Modern formats**: WebP with PNG fallback
- **Maintained quality**: Smart resizing preserves visual quality
- **Organized structure**: Same folder hierarchy as original

## Next steps

After running the script, update your React components to use the smaller images:

```jsx
// Instead of:
<img src="/images/about/black.png" />

// Use:
<img src="/small_images/about/black_small.webp" />
```
