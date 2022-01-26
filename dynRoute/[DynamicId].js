import React from 'react';

import {useRouter} from 'next/router'
function DynamicIdDet() {
    const router = useRouter();
    const routeId = router.query.DynamicId;
  return <div>
      <h3>Dynamic Details </h3>
      <h2>Route Value:  {routeId}</h2>
  </div>;
}

export default DynamicIdDet;
