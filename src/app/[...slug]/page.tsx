import {sectionRenderer} from "@/app/utils/section-renderer";
import {Metadata} from "next";
import {getPageBySlug} from "@/app/utils/get-page-by-slug";
import {FALLBACK_SEO} from "@/app/utils/constants";


type Props = {
    params: {
        lang: string,
        slug: string
    }
}


// export async function generateMetadata({params}: Props): Promise<Metadata> {
//     const page = await getPageBySlug(params.slug, params.lang);
// }


export default async function PageRoute({params}: Props) {
    const page = await getPageBySlug(params.slug, params.lang);
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
