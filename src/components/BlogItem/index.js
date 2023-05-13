import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate, id} = blogItem

  return (
    <div>
      <div className="blog-item-header">
        <h1 className="title"> {title} </h1>
        <p className="published-date"> {publishedDate} </p>
      </div>
      <p className="description"> {description} </p>
      {id !== 5 && <hr />}
    </div>
  )
}

export default BlogItem
