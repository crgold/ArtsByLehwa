import sanityClient from '@sanity/client';
    import imageUrlBuilder from '@sanity/image-url'
    import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

    const client = sanityClient({
        projectId: "xl9nhdz9",
        dataset: "production",
        apiVersion: "2021-10-21",
        useCdn: false
    });

    const builder = imageUrlBuilder(client);

    export async function get() {
        const data = await client.fetch(`*[_type == "gallery"]{"image": images[0].asset->}`);

        if (data) {
            console.log(data);
            return {
            status: 200,
            body: {
                painting: data
            }
            };
        }
        return {
            status: 500,
            body: new Error("Internal Server Error")
        };
    }

    /**
    * @param {import("@sanity/image-url/lib/types/types").SanityImageSource} source
    */
    export function urlFor(source: SanityImageSource) {
        return builder.image(source);
    }