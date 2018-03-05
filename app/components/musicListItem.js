import React from 'react'
import './musicListItem.less'
import Pubsub from 'pubsub-js'

class MusicListItem extends React.Component {
	constructor(props) {
		super(props)
	}

	playMusic(musicItem) {
		Pubsub.publish('PLAY_MUSIC', musicItem)
	}

	deleteMusic(musicItem, e) {
		e.stopPropagation()
		Pubsub.publish('DELETE_MUSIC', musicItem)
	}

	render() {
		let musicItem = this.props.musicItem
		return (
            <li onClick={this.playMusic.bind(this, musicItem)} className={`components-musiclistitem row ${this.props.focus ? 'focus' : ''}`}>
				<p>{musicItem.title} - {musicItem.artist}</p>
            	<p onClick={this.deleteMusic.bind(this, musicItem)} className="-col-auto delete"></p>
            </li>
		)
	}
}

export default MusicListItem