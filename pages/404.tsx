import Image from "next/image";
import React from "react";
import Layout from "../src/components/Layout/Layout";

const Error404 = () => {
  return (
    <Layout title="Error 404">
      <>
        <Image
          src="/img/error404.png"
          width={500}
          height={500}
          quality={100}
          objectFit="contain"
          alt="Page not found image"
        />
      </>
    </Layout>
  );
};

export default Error404;
