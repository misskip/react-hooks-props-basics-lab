const Links = (props) => {
  const links = props.links;

  console.log(links);

  return (
    <div className="links">
        <h3>Links</h3>
        <a href="https://github.com/liza"></a>
        <a href="https://www.linkedin.com/in/liza/"></a>
      </div>

  );

}

  export default Links;