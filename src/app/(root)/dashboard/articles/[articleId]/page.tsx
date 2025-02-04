// "use client";
import Link from "next/link";
// import {use} from "react";
const ArticlePage = async({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" }>;
}) => {
  //for client component 
  // const { articleId } =  use(params);
  // const { lang = "en" } = use(searchParams);

  // for server component
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  // Server-side rendering
  // const articleId = params.articleId;
  // const lang = searchParams.lang || "en";

  return (
    <div>
      {
        lang==="en"? <h1 className="text-4xl">Article Page for news to {articleId}</h1>:
        <h1 className="text-4xl">আর্টিকেল পেজ নিউজের জন্য {articleId}</h1>
      }
      {lang === "en" ? <p>Reading in English.</p> : <p>Reading in Bangla.</p>}
      <div className="flex gap-4 underline">
        <Link href={`/dashboard/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/dashboard/articles/${articleId}?lang=bn`}>Bangla</Link>
      </div>
    </div>
  );
};

export default ArticlePage;
