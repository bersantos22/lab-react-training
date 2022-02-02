export function Rating(props) {
    const numberOfStars = Math.round(props.children);
    let star ="★";
    star = star.repeat(numberOfStars).padEnd(5,'☆');

    return <p style={{padding:"2px", paddingLeft:'20px',fontSize:'25px'}}>{star}</p>
}

/* ☆★ */