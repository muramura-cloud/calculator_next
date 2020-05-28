import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () =>
    <div>
        <Layout header="Next" title="Top page">
            <p>welcome to next.js!</p>
            <Counter/>
            <hr />
            <Link href="/calc">
                <button>go to calc page &gt;&gt;</button>
            </Link>
        </Layout>
    </div>