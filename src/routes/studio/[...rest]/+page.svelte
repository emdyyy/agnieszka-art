<script lang="ts">
  import { renderStudio, defineConfig } from "sanity";
  import { deskTool } from "sanity/desk";

  const config = defineConfig({
    plugins: [deskTool()],
    name: "default",
    basePath: "/studio",
    projectId: "ln2b6gii",
    dataset: "production",
    schema: {
      types: [
        {
          name: "header-gallery",
          type: "document",
          title: "Header Gallery",
          fields: [
            {
              name: "imageTitle",
              type: "string",
              title: "Image title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "headerGalleryImage",
              type: "image",
              title: "Image for header gallery",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "imageTitle",
              media: "headerGalleryImage",
            },
          },
        },
        {
          name: "main-gallery",
          type: "document",
          title: "Main Gallery",
          fields: [
            {
              name: "imageTitle",
              type: "string",
              title: "Image title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "mainGalleryImage",
              type: "image",
              title: "Image for main gallery",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "imageTitle",
              media: "mainGalleryImage",
            },
          },
        },
      ],
    },
  });

  const createStudio = (e: HTMLDivElement) => {
    renderStudio(e, config);
  };
</script>

<div use:createStudio id="app" />
