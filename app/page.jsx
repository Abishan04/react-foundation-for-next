import LikeButton from './like-button';

    function Header({ title }) {
       console.log(title);
       return <h1>{title ? title : 'Default title'}</h1>;
    }

    export default function HomePage() {
        const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

         function handleClick() {
            setLikes(likes + 1);
        }

        return(
            <div>
                {/* Nesting the Header component */}
                <Header title="Develop. Preview. Ship." />
                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
                <LikeButton />
            </div>
        );
      }
