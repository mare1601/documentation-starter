import React from 'react';
import Layout from '../components/layout';
import BugForm from '../components/BugForm';


const BugPage = () => (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <BugForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );

export default BugPage;
