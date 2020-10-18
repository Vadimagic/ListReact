import React from 'react'

function Article(props) {
	const {article} = props
	const body = <section>{article.text}</section>
	
	return  (
		<div className="hello" syle={{color: 'red'}}>
			<h2>{article.title}</h2>
			{body}
			<h3>creation date: {(new Date(article.date)).toDateString()}</h3>
		</div>
	)
}

export default Article