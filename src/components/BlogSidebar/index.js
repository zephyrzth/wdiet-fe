import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'

const BlogSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Wedding Event <span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Photography <span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Album <span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Wedding Dress<span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Best Gift <span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Wedding Tips <span>8</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">photography</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">wedding</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">events</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">creative</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Solution</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">collection</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Idea</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">bride & groom</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
