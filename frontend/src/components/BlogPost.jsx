import PropTypes from "prop-types";

export default function BlogPost({ post }) {
   return (
      <article className="relative text-white">
         <figure>
            <img src={post.img} alt="blog image" className="w-full" />
         </figure>

         <section className="space-y-2 p-4">
            <h3 className="border-b-2 border-dotted text-h4">{post.title}</h3>
            <p className="overflow-clip text-small-md">{post.description}</p>
            <p className="flex gap-2 text-body-sm capitalize">
               read more <span>--♦</span>
            </p>
         </section>

         <div className="absolute right-2 top-2 bg-blue-off px-6 py-1 font-Rufina text-h6">
            {post.category}
         </div>
      </article>
   );
}

BlogPost.propTypes = {
   post: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
   }).isRequired,
};
