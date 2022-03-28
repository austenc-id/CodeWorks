export class ArticRunnerPage {
	constructor () {
		this.template = `
		<main oncontextmenu="return false;" ondragstart="return false;" class="container-fluid">
        <div class="row spacer"></div>
        <row class="row align-items-center">
            <div class="col-md-2"></div>
            <colm class="col-md-6">
                <img onclick="app.arctic.runner()" src="assets/style/images/arctic-runner/running.gif" alt="husky" class="img-fluid arctic-gif">
            </colm>
            <colm class="col-md">
                <h3 id="e"></h3>
                <h3 id="d"></h3>
                <h3 id="t"></h3>
                <h3 id="c"></h3>
            </colm>
        </row>
        <div class="row spacer"></div>
        <row class="row text-center">
            <div class="col-lg"></div>
            <colm class="col-lg upgrade-card">
                <h4 id="pouch" onclick="app.arctic.purchaseUpgrade('pouch')">Pouch</h4>
                <figcaption>increase token carrying capacity by:</figcaption>
                <figcaption id="b1"></figcaption>
                <figcaption id="p1"></figcaption>
                <figcaption id="u1"></figcaption>
            </colm>
            <div class="col-lg"></div>
            <colm class="col-lg upgrade-card">
                <h4 id="snack" onclick="app.arctic.purchaseUpgrade('snack')">Snack</h4>
                <figcaption>increases energy regeneration by:</figcaption>
                <figcaption id="b2"></figcaption>
                <figcaption id="p2"></figcaption>
                <figcaption id="u2"></figcaption>
            </colm>
            <div class="col-lg"></div>
            <colm class="col-lg upgrade-card">
                <h4 id="endurance" onclick="app.arctic.purchaseUpgrade('endurance')">Endurance</h4>
                <figcaption>reduces energy used per click by:</figcaption>
                <figcaption id="b3"></figcaption>
                <figcaption id="p3"></figcaption>
                <figcaption id="u3"></figcaption>
            </colm>
            <div class="col-lg"></div>
            <colm class="col-lg upgrade-card">
                <h4 id="friend" onclick="app.arctic.purchaseUpgrade('friend')">Friend</h4>
                <figcaption>increases tokens per click by: </figcaption>
                <figcaption id="b4"></figcaption>
                <figcaption id="p4"></figcaption>
                <figcaption id="u4"></figcaption>
            </colm>
            <div class="col-lg"></div>
        </row>
    </main>`
	}
}
