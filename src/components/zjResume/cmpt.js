import rHeader from "../rHeader/cmpt";
import rFooter from "../rFooter/cmpt";
import rMain from "../rMain/cmpt";

export default angular
	.module("zjResume", [
		rHeader,
		rFooter,
		rMain
	])
	.component("zjResume", {
		templateUrl : "components/zjResume/cmpt.html",
		controllerAs: "zr",
		controller  : ZjResumeCtrl
	})
	.name;

function ZjResumeCtrl() {}