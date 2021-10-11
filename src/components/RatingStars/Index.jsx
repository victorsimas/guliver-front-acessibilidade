import starImg from '../../assets/star.svg';
import emptyStarImg from '../../assets/empty-star.svg';
import { Container } from './Style';

export function RatingStars(rating) {

	// This idiot function will be rewritten
	function getStars(rating) {
		if (rating <= 0.9)
			return (
				<>
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
				</>
			)
		else if (rating <= 1.9)
			return (
				<>
					<img src={starImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
				</>
			)
		else if (rating <= 2.9)
			return (
				<>
					<img src={starImg} />
					<img src={starImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
				</>
			)
		if (rating <= 3.9)
			return (
				<>
					<img src={starImg} />
					<img src={starImg} />
					<img src={starImg} />
					<img src={emptyStarImg} />
					<img src={emptyStarImg} />
				</>
			)
		if (rating <= 4.9)
			return (
				<>
					<img src={starImg} />
					<img src={starImg} />
					<img src={starImg} />
					<img src={starImg} />
					<img src={emptyStarImg} />
				</>
			)
		return (
			<>
				<img src={starImg} />
				<img src={starImg} />
				<img src={starImg} />
				<img src={starImg} />
				<img src={starImg} />
			</>
		)
	}

	return (
		<Container>
			{getStars(rating)}
		</Container>
	)
}
