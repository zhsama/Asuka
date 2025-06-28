export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat", // 新功能
				"fix", // 修复bug
				"refactor", // 重构代码
				"docs", // 文档更新
				"style", // 代码格式化
				"perf", // 性能优化
				"test", // 测试相关
				"chore", // 构建工具或辅助工具的变动
				"revert", // 回滚提交
				"build", // 构建系统或外部依赖项的更改
				"ci", // CI配置文件和脚本的更改
			],
		],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"scope-case": [2, "always", "lower-case"],
		"subject-case": [
			2,
			"never",
			["sentence-case", "start-case", "pascal-case", "upper-case"],
		],
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "never", "."],
		"header-max-length": [2, "always", 72],
	},
};
