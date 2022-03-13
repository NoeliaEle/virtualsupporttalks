import {
  ICenteredContentFields,
  IContentWithFullSizeImageFields,
  IHeaderBlockFields,
  IPageFields,
  IContentImageBgFields,
  ITwoImagesFields,
  IBlogpostFields,
  LOCALE_CODE,
} from "../../@types/generated/contentful";

import ContentBlockHeader from "./ContentBlocks/Header";
import ContentBlockCentered from "./ContentBlocks/Centered";
import ContentBlockFullSizeImageBg from "./ContentBlocks/FullSizeImageBg";
import ContentBlockImageBg from "./ContentBlocks/ImageBg";
import ContentBlockTwoImages from "./ContentBlocks/TwoImages";
import ContentfulRichText from "./ContentfulRichText";

type ContentBlockProps = {
  content: IPageFields["content"] | IBlogpostFields["content"];
  locale: LOCALE_CODE;
};

export default function ContentBlocks({ content, locale }: ContentBlockProps) {
  return (
    <div>
      {content.map((item, index) => {
        const {
          sys: {
            contentType: {
              sys: { id },
            },
          },
        } = item;
        if (id === "headerBlock") {
          const { backgroundcolor, image, buttonText, buttonUrl } =
            item.fields as IHeaderBlockFields;
          return (
            <ContentBlockHeader
              key={item.sys.id}
              backgroundcolor={backgroundcolor}
              image={image}
              buttonText={buttonText}
              buttonUrl={buttonUrl}
            />
          );
        }
        if (id === "centeredContent") {
          const { bgcolor, content, buttonText, buttonUrl } =
            item.fields as ICenteredContentFields;
          return (
            <ContentBlockCentered
              key={item.sys.id}
              bgcolor={bgcolor}
              content={content}
              buttonText={buttonText}
              buttonUrl={buttonUrl}
            />
          );
        }
        if (id === "contentWithFullSizeImage") {
          const { backgroundcolor, image, imageRight, content } =
            item.fields as IContentWithFullSizeImageFields;
          return (
            <ContentBlockFullSizeImageBg
              key={item.sys.id}
              backgroundcolor={backgroundcolor}
              image={image}
              imageRight={imageRight}
            >
              {content && <ContentfulRichText content={content} />}
            </ContentBlockFullSizeImageBg>
          );
        }
        if (id === "contentImageBg") {
          const {
            backgroundImage,
            buttonUrl,
            buttonText,
            withCharityBanner,
            content,
          } = item.fields as IContentImageBgFields;
          return (
            <ContentBlockImageBg
              key={item.sys.id}
              backgroundImage={backgroundImage}
              buttonUrl={buttonUrl}
              buttonText={buttonText}
              withCharityBanner={withCharityBanner}
              withPaddingTop={index === 0}
            >
              {content && <ContentfulRichText content={content} />}
            </ContentBlockImageBg>
          );
        }
        if (id === "twoImages") {
          const { image1, image2, text1, text2, link1, link2 } =
            item.fields as ITwoImagesFields;
          return (
            <ContentBlockTwoImages
              key={item.sys.id}
              image1={image1}
              image2={image2}
              text1={text1}
              text2={text2}
              link1={link1}
              link2={link2}
              locale={locale}
            />
          );
        }
        if (id === "coachList") {
          return null;
        }
        return (
          <div key={item.sys.id}>
            {item.fields.title + " " + item.sys.contentType.sys.id}
          </div>
        );
      })}
    </div>
  );
}
