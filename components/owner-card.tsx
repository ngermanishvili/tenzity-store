import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export default function OwnerCard() {
    const instagramUrl = "https://www.instagram.com/gpatarkalashvili/";
    const facebookUrl = "https://www.instagram.com/_phakhuridzel/";

    const handleFollowClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="flex flex-wrap gap-5 md:grid md:grid-cols-2">
            <Card className="max-w-[340px] md:max-w-[none]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="https://media.licdn.com/dms/image/D4E03AQG8-LFW_7AWlg/profile-displayphoto-shrink_400_400/0/1674212835391?e=1705536000&v=beta&t=tAPKiCiaqRdQoABfl2S_lpnABdsFA0evLkcAj4yeRQs" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Giorgi Patarkalashvili</h4>
                            <h5 className="text-small tracking-tight text-default-400">@gpatarkalashvili</h5>
                        </div>
                    </div>
                    <Button
                        color="primary"
                        radius="full"
                        size="sm"
                        onPress={() => handleFollowClick(instagramUrl)}
                    >
                        Follow
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        Giorgi Patarkalashvili, Founder and Owner of Tenzity Store.
                    </p>
                    <span className="pt-2">
                        #tenzity
                        <span className="py-2" aria-label="computer" role="img">
                            🎉
                        </span>
                    </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">334</p>
                        <p className=" text-default-400 text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">2.4K</p>
                        <p className="text-default-400 text-small">Followers</p>
                    </div>
                </CardFooter>
            </Card>
            <Card className="max-w-[340px] md:max-w-[none]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQq6X-gMjjMt-13yItnss1BYEkN2F7vOT_fx3PlAgO&s" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Lizi Pakhuridze</h4>
                            <h5 className="text-small tracking-tight text-default-400">@_phakuridzel</h5>
                        </div>
                    </div>
                    <Button
                        color="primary"
                        radius="full"
                        size="sm"
                        onPress={() => handleFollowClick(facebookUrl)}
                    >
                        Follow
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        Lizi Pakhuridze, Founder and Owner of Tenzity Store.
                    </p>
                    <span className="pt-2">
                        #tenzitystore
                        <span className="py-2" aria-label="computer" role="img">
                            👀
                        </span>
                    </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">224</p>
                        <p className=" text-default-400 text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">1K</p>
                        <p className="text-default-400 text-small">Followers</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

