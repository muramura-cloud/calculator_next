import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () =>
    <div>
        <Layout header="Next" title="Top page">
            <p>welcome to other.js!</p>
            <Counter/>
            <hr />
            <Link href="/">
                <button>go to index page &gt;&gt;</button>
            </Link>
        </Layout>
    </div>