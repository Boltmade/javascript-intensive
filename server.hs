module Main (main) where

import Data.List (lookup)
import Control.Monad (join)
import Data.Text (Text, pack, isInfixOf)
import Data.Aeson (object, (.=))

import Network.Wai
import Network.Wai.Util (json, stringHeaders', string)
import Network.Wai.Handler.Warp (run)
import Network.Wai.Middleware.RequestLogger (logStdoutDev)
import Network.HTTP.Types (ok200, badRequest400)
import Network.HTTP.Types.URI (queryToQueryText)

app :: Text -> Application
app q req = json ok200 (stringHeaders' [("Access-Control-Allow-Origin", "*")]) (object [
			pack "count" .= length results,
			pack "items" .= results
		])
	where
	results = filter (q `isInfixOf`) stuff
	stuff = [pack "Waterloo", pack "Toronto", pack "Calgary", pack "Edmonton", pack "Montréal", pack "London"]

withQ :: (Text -> Application) -> Application
withQ a req = case q of
		Just x -> a x req
		Nothing -> string badRequest400 (stringHeaders' [("Content-Type", "text/html"), ("Access-Control-Allow-Origin", "*")])
			"<p class=\"error\">You must pass a query!</p>"
	where
	q = join $ lookup (pack "q") (queryToQueryText $ queryString req)

main :: IO ()
main = do
	putStrLn "Started, port 3000"
	run 3000 $ logStdoutDev $ withQ app
