<template>
	<div id="header">
		<div class="nav">
			<ul>
				<li class="signUp">
					<router-link to="/signUp"><span>注册</span></router-link>
				</li>
				<li class="signUp">
					<router-link to="/"><span>退出</span></router-link>
				</li>
				<li class="signIn">
					<router-link to="/logIn"><span>登录</span></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'topBar',
		data () {
			return {

			};
		},
		created () {

		},
		methods: {

		},
		computed: {

		}
	}
	;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.header {
		position: relative
	}

	.nav {
		width: 100%;
		height: 40px;
		line-height: 40px;
    background: #000;
    ul {
      margin: 0;
    }
		li {
			width: 40px;
			height: 40px;
			text-align: center;
      margin-right: 40px;
      list-style: none;
			&:hover {
				color: aqua;
			}
			a {
				text-decoration: none;
			}
			span {
				width: 40px;
				line-height: 40px;
				color: #fff;
				display: block;
				height: 40px;
				&.active {
					color: aqua;
				}
			}
		}
	}

	.signIn, .signUp {
		float: right;
		// margin-right: 20px;
		font-size: 13px;
	}

	.signUp {
		margin-right: 20px;
	}

</style>
