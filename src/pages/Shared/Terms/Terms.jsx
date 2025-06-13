import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa similique impedit ipsa, doloremque beatae a dolorum dignissimos ab, fuga vitae, consequatur omnis reiciendis eveniet. Ab, deserunt, asperiores dolores tempore dolorum saepe expedita maiores consectetur fugiat debitis labore commodi omnis. Rem debitis officia, incidunt reiciendis provident illum deleniti illo eos fuga?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;