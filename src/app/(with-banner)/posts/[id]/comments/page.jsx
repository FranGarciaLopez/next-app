import Image from "next/image"
const fetchComments = async (id) => {
          await new Promise(resolve => setTimeout(resolve, 3000))
          /* throw new Error('Error al cargar los comentarios') */

          return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
                    next: {
                              revalidate: 60
                    }
          })
          .then(res => res.json())
}


export default async function Post({ params }) {
          const { id } = params
          const comments = await fetchComments(id)
          return (
                    <ul style={{ background: '#F0F0F0', fontSize: '14px', color: '#000', listStyle: 'none' }}>
                              {comments.map(comment => (
                                        <li key={comment.id}>
                                                  <br />
                                                  <h4>Name: { comment.name }</h4>
                                                  <big>Body: { comment.body }</big>
                                                  <br />
                                                  <Image width='50' height='50' alt={comment.name} src={`https://i.pravatar.cc/150?u=${comment.email}`}/>  

                                        </li>
                              ))}
                    </ul>
          )
}