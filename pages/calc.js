import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/Calc';

export default () =>
    <div>
        <Layout header="Calc" title="calculator">
            <p>welcome to calc.js!</p>
            <Calc/>
            <hr />
            <Link href="/">
                <button>go to index page &gt;&gt;</button>
            </Link>
        </Layout>
    </div>