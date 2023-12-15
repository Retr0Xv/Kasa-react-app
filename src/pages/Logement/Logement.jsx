import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import res from '../../data.json';

export default function FicheLogement() {
	const params = useParams();
	const navigate = useNavigate();
	const picked = res.find(({ id }) => id === params.id);

	if (picked === undefined) {
		navigate("/404", { state: { message: "Can't get data" } });
	}

	const slidePics = picked && picked.pictures;
	const tags = picked && picked.tags;
	const equipments = picked && picked.equipments;
	const equip =
		picked &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));

	return (
		picked && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{picked.title}</h1>
							<h3>{picked.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={picked.host.name}
								hostPic={picked.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rate score={picked.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={picked.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}
