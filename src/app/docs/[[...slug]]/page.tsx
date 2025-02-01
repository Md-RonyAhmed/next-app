import { notFound } from "next/navigation";

const DocsPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  if (slug?.length > 3) {
    notFound();
  }
  if (slug?.length === 3) {
    return (
      <h1>
        Viewing docs with explanation {slug[2]} and concept {slug[1]} for
        feature {slug[0]}
      </h1>
    );
  } else if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs with concept {slug[1]} for feature {slug[0]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  return <div>Default DocsPage</div>;
};

export default DocsPage;
