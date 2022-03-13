import FadeIn from "../FadeIn";
import CleverLink from "../CleverLink";

import type {
  ITwoImagesFields,
  LOCALE_CODE,
} from "../../../@types/generated/contentful";

type ImageType = {
  image: string;
  text: string;
  link: string;
};

interface TwoImagesProps extends ITwoImagesFields {
  locale: LOCALE_CODE;
}

export default function ContentBlockTwoImages({
  image1,
  image2,
  text1,
  text2,
  link1,
  link2,
  locale,
}: TwoImagesProps) {
  if (!image1 || !image2 || !text1 || !text2 || !link1 || !link2) {
    return null;
  }
  const images: ImageType[] = [
    {
      image: image1?.fields.file.url,
      text: text1,
      link: link1,
    },
    {
      image: image2?.fields.file.url,
      text: text2,
      link: link2,
    },
  ];
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-16 px-4 md:grid-cols-2">
      {images.map(({ image, link, text }) => (
        <FadeIn key={link}>
          <CleverLink
            className="group block max-w-full overflow-hidden rounded-md bg-gray-300 no-underline shadow-lg"
            to={`/${locale}${link}`}
          >
            <img
              src={image}
              alt={text}
              className="h-[400px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            />

            <h2 className="m-0 px-4 py-8 font-headline text-2xl font-bold">
              {text}
            </h2>
          </CleverLink>
        </FadeIn>
      ))}
    </section>
  );
}
