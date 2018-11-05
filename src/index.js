/**
 * 入口文件
 */
import appServices from "./app/service";
import zjResume from "./components/zjResume/cmpt";

angular.module("bootstrap", [
	appServices,
	zjResume
]);