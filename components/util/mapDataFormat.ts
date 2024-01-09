import { format } from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

interface mapDataformatProps {
  id: number;
  title: string;
  url: string;
  image_source: string;
  created_at: string;
  description: string;
}

export const mapDataFormat = ({
  id,
  title,
  url,
  image_source,
  created_at,
  description,
}: mapDataformatProps) => {
  const formatLinksData = {
    id,
    title,
    url,
    imageSource: image_source,
    createdAt: format(new Date(created_at), "yyyy. MM. dd"),
    elapsedTime: getElapsedTime(created_at),
    description,
    alt: `${title} 이미지`,
  };

  return formatLinksData;
};
