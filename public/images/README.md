# How to Add Your Own Images

This folder is where you can add your custom images for the gallery.

**Step 1: Upload Your Images**

Drag and drop your image files (e.g., `my-photo.jpg`, `another-pic.png`) into this `public/images/` folder.

**Step 2: Update the Image List**

Open the file located at: `src/lib/placeholder-images.json`

You will see a structure like this:

```json
{
  "invitation": {
    "src": "/images/invitation-placeholder.svg",
    "width": 800,
    "height": 1000,
    "alt": "Farewell event invitation",
    "hint": "event invitation"
  },
  "group_photo": {
    "src": "/images/group-photo.svg",
    "width": 800,
    "height": 600,
    "alt": "A group photo of the graduating class.",
    "hint": "group photo"
  }
}
```

To add your image, create a new entry. For example, if you added `my-photo.jpg` to this folder:

```json
"my_awesome_photo": {
  "src": "/images/my-photo.jpg",
  "width": 800,   // Change to your image's width
  "height": 600,  // Change to your image's height
  "alt": "A description of my awesome photo",
  "hint": "my photo"
}
```

**IMPORTANT:** The `src` path MUST start with `/images/` followed by your exact file name.

Save the `placeholder-images.json` file, and your image will appear in the gallery.
