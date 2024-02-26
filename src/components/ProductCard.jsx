/* eslint-disable react/prop-types */
import {
    Badge,
    Button,
    Card,
    PlayButton,
    Progress
} from "keep-react";

const ProductCard = ({ title, thumbnail, price, description }) => {
    return (
        <div>
            <Card
                className="max-w-xs overflow-hidden rounded-md"
                imgSrc={thumbnail}
                imgSize="md">

                <Card.Container className="p-6">
                    <Card.Container className="flex items-center justify-between">
                        <Badge size="xs" colorType="light" color="gray">
                            For Sale
                        </Badge>
                        <Card.Title>${price}</Card.Title>
                    </Card.Container>
                    <Card.Container className="my-3">
                        <Card.Title>{title}</Card.Title>
                        <Card.Description>
                            {description}
                        </Card.Description>
                    </Card.Container>
                    <Card.Container className="flex items-center justify-start gap-5">
                        <Button size="sm" type="outlineGray">

                            Add To Cart
                        </Button>
                    </Card.Container>
                </Card.Container>
            </Card>


        </div>
    );
};

export default ProductCard;