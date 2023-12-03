const VideoBackground = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video loop autoPlay muted className="object-cover w-full h-full">
          <source src="./assets/nft_video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoBackground;
