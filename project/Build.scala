import sbt._
import Keys._
import PlayProject._
import com.typesafe.sbt.SbtStartScript

object ApplicationBuild extends Build {

    val appName         = "angularjs-interceptor-interpolate"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(
      // Add your own project settings here   
       resolvers += "spray repo" at "http://repo.spray.io/"
    )
}
