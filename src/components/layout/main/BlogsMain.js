import HeroInner from "@/components/sections/hero-banners/HeroInner";
import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";

const BlogsMain = () => {
  return (
    <main>
      <HeroInner title={"Riveting Reflections"} breadcrumb={"Blog"} currentPage={"Riveting Reflections"} />
      <BlogsPrimary />
    </main>
  );
};

export default BlogsMain;
