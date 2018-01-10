export default {
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                var reg = new RegExp(this.search, "i");
                return blog.title.match(reg)
            })
        }
    }
}