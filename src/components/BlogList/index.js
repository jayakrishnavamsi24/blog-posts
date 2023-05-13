import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blogs-list-cont">
      {blogsList.map(eachBlog => (
        <BlogItem blogItem={eachBlog} key={eachBlog.id} />
      ))}
    </div>
  )
}

export default BlogList
