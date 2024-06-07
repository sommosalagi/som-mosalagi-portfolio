
function ProjectCard({src, title, description, href}) {
  return (
    <a href={href} target='_blank'>
                <img className='hover' src={src} alt={`${title} logo`}></img>
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
  )
}

export default ProjectCard