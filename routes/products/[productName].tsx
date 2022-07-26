/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import SayHello from "../../islands/SayHello.tsx";

function ProductPage(props: PageProps) {
  return (
    <div>
      <h1>Product: {props.params.productName}</h1>
      <SayHello />
    </div>
  );
}

export default ProductPage;
