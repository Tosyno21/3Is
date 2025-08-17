import React from "react";

type ResponsiveVideoProps = {
  videoUrl: string;
  title?: string;
};

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({
  videoUrl,
  title = "Video",
}) => {
  return (
    <div className="relative w-full pt-[40%]">
      <iframe
        src={videoUrl}
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-sm shadow-lg"
      />
    </div>
  );
};

export default ResponsiveVideo;
