import {Link} from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div>This is my homepage !!</div>
            <p>
                Go to <Link to="/products">the list of products</Link>.
            </p>
        </>
    )
}