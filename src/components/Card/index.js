import './index.css'

const TechCard = props => {
  const {designCard} = props
  const {title, description, imgUrl, className} = designCard
  return (
    <div className={`cardlayout ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} className="img-position" alt="Img-break" />
    </div>
  )
}
export default TechCard
