import { useState, useEffect } from "react";
import axios from "axios";

const NFT = () => {
  const [nftData, setNftData] = useState({
    image: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    const fetchNft = async () => {
      try {
        const response = await axios.get(
          "https://olbm.mypinata.cloud/ipfs/QmPZGeNepoLDfyDSafRjhhKBWgCwKcnLEjEUkh81yufMEs"
        );
        setNftData(response.data);
      } catch (e) {
        console.error("Error fetching NFT", e);
      }
    };
    fetchNft();
  }, []);

  return (
    <div className="flex flex-col items-center pt-20">
      <img
        src={nftData.image}
        alt={nftData.image}
        className="flex w-50 h-50 rounded-full shadow-pink-300 shadow-xl drop-shadow-2xl"
      />
      <h1 className="flex text-slate-50 bg-violet-500 px-10 py-2 my-10 bg-opacity-60 w-fit text-xl rounded-3xl">
        {nftData.name}
      </h1>
      <p className="text-slate-50 text-sm">{nftData.description}</p>
    </div>
  );
};

export default NFT;
