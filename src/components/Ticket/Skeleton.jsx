import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={502}
        height={135}
        viewBox='0 0 502 135'
        backgroundColor='#f3f3f3'
        foregroundColor='#2196f3'
        {...props}
    >
        <rect x='15' y='20' rx='7' ry='7' width='137' height='31' />
        <rect x='374' y='18' rx='7' ry='7' width='114' height='37' />
        <rect x='15' y='77' rx='7' ry='7' width='78' height='18' />
        <rect x='15' y='98' rx='7' ry='7' width='100' height='21' />
        <rect x='192' y='77' rx='7' ry='7' width='75' height='18' />
        <rect x='193' y='99' rx='7' ry='7' width='96' height='21' />
        <rect x='359' y='77' rx='7' ry='7' width='100' height='18' />
        <rect x='359' y='101' rx='7' ry='7' width='84' height='21' />
    </ContentLoader>
)

export default Skeleton
