import css from './Contact.module.css'

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.boxItem}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}