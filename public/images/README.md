# How to add your own images

1.  **Upload your images here:** Place your image files (e.g., `my-photo.jpg`, `event-picture.png`) directly into this `public/images/` folder.

2.  **Update the gallery:** Open the `src/lib/placeholder-images.json` file.

3.  **Add a new entry for each image:** For each image you uploaded, add a new block to the JSON file like this:

    ```json
    "yourImageId": {
      "src": "/images/your-image-name.jpg",
      "width": 800,
      "height": 600,
      "alt": "A description of your image for accessibility.",
      "hint": "some keywords"
    }
    ```

    -   Replace `"yourImageId"` with a unique name for your image.
    -   Replace `"/images/your-image-name.jpg"` with the correct path to your file.
    -   Adjust the `width`, `height`, `alt`, and `hint` to match your image.

That's it! The gallery will automatically update with your new pictures.
