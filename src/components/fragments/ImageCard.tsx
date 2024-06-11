import React, { FC, ReactNode, useState } from "react";
import Card from "../ui/Card";
import Image from "next/image";
import Skeleton from "../ui/Skeleton";

interface ImageCardProps {
  image: string;
  children?: ReactNode;
}

const ImageCard: FC<ImageCardProps> = ({ image, children }) => {
  const [loadStatus, setLoadStatus] = useState("loading");

  return (
    <Card>
      <div className="relative w-full h-full transition-all ease-in group">
        {loadStatus === "loading" && <Skeleton />}
        <Image
          alt={image}
          src={loadStatus === "error" ? "/icon/page-not-found.svg" : image}
          layout="fill"
          objectFit={loadStatus === "error" ? "contain" : "cover"}
          objectPosition="center"
          quality={100}
          onLoadingComplete={() => setLoadStatus("loaded")}
          onError={() => setLoadStatus("error")}
          className={`rounded-xl transition-all ease-in ${
            loadStatus === "loading" ? "opacity-0" : "opacity-100"
          }`}
        />

        {loadStatus === "loaded" && children}
      </div>
    </Card>
  );
};

export default ImageCard;
